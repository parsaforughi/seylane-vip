import {
  MissionLogStatus,
  PrismaClient,
  SubmissionStatus,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const demoUser = await prisma.user.upsert({
    where: { telegramId: 999_999_999 },
    update: {
      firstName: "VIP",
      lastName: "Demo",
      username: "vip_demo",
      storeName: "سیلانه VIP",
      city: "Tehran",
      vipSince: new Date("2023-06-01T00:00:00.000Z"),
    },
    create: {
      telegramId: 999_999_999,
      firstName: "VIP",
      lastName: "Demo",
      username: "vip_demo",
      phone: "+989121234567",
      storeName: "سیلانه VIP",
      managerName: "مدیر نمونه",
      city: "Tehran",
      customerCode: "VIP-2024",
      vipSince: new Date("2023-06-01T00:00:00.000Z"),
    },
  });

  const missions = [
    {
      id: 1,
      title: "ثبت خرید ۱۰۰ میلیونی",
      description: "آپلود فاکتور خرید حجمی برندهای سیلانه",
      reward: 12,
      isActive: true,
    },
    {
      id: 2,
      title: "ارسال عکس چیدمان ویترین",
      description: "ارسال ۳ عکس از چیدمان فعلی",
      reward: 8,
      isActive: true,
    },
    {
      id: 3,
      title: "شرکت در جلسه آموزشی",
      description: "حضور کامل در جلسه حضوری یا آنلاین",
      reward: 10,
      isActive: true,
    },
    {
      id: 4,
      title: "معرفی مشتری جدید",
      description: "ارجاع مشتری VIP جدید برای برند",
      reward: 15,
      isActive: true,
    },
    {
      id: 5,
      title: "ثبت گزارش فروش ماهانه",
      description: "آپلود فایل اکسل یا PDF فروش ماهانه",
      reward: 6,
      isActive: true,
    },
  ];

  await Promise.all(
    missions.map((mission) => {
      const { id, ...rest } = mission;
      return prisma.mission.upsert({
        where: { id },
        update: rest,
        create: mission,
      });
    })
  );

  await prisma.notification.deleteMany({ where: { userId: demoUser.id } });
  await prisma.referral.deleteMany({ where: { userId: demoUser.id } });
  await prisma.purchase.deleteMany({ where: { userId: demoUser.id } });
  await prisma.display.deleteMany({ where: { userId: demoUser.id } });
  await prisma.missionLog.deleteMany({ where: { userId: demoUser.id } });
  await prisma.stamp.deleteMany({ where: { userId: demoUser.id } });

  const missionLogs = [
    {
      userId: demoUser.id,
      missionId: 1,
      status: MissionLogStatus.COMPLETED,
      reward: 12,
      adminNote: "فاکتور تایید شد.",
    },
    {
      userId: demoUser.id,
      missionId: 2,
      status: MissionLogStatus.COMPLETED,
      reward: 8,
    },
    {
      userId: demoUser.id,
      missionId: 3,
      status: MissionLogStatus.PENDING,
      reward: 0,
    },
    {
      userId: demoUser.id,
      missionId: 4,
      status: MissionLogStatus.PENDING,
      reward: 0,
    },
    {
      userId: demoUser.id,
      missionId: 5,
      status: MissionLogStatus.COMPLETED,
      reward: 6,
    },
  ];

  await prisma.missionLog.createMany({ data: missionLogs });

  const displays = [
    {
      userId: demoUser.id,
      missionId: 2,
      imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=60",
      status: SubmissionStatus.APPROVED,
    },
    {
      userId: demoUser.id,
      missionId: 2,
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=60",
      status: SubmissionStatus.PENDING,
    },
  ];
  await prisma.display.createMany({ data: displays });

  const purchases = [
    {
      userId: demoUser.id,
      missionId: 1,
      imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=60",
      brand: "Seylane",
      amount: 125_000_000,
      status: SubmissionStatus.APPROVED,
    },
    {
      userId: demoUser.id,
      missionId: 1,
      imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=60",
      brand: "VIP Exclusive",
      amount: 82_000_000,
      status: SubmissionStatus.PENDING,
    },
  ];
  await prisma.purchase.createMany({ data: purchases });

  const referrals = [
    {
      userId: demoUser.id,
      missionId: 4,
      fullName: "علی رضایی",
      phone: "+989121110022",
      status: SubmissionStatus.APPROVED,
    },
    {
      userId: demoUser.id,
      missionId: 4,
      fullName: "مینا احمدی",
      phone: "+989123334455",
      status: SubmissionStatus.PENDING,
    },
  ];
  await prisma.referral.createMany({ data: referrals });

  const stampEntries = [
    { userId: demoUser.id, missionId: 1, count: 1 },
    { userId: demoUser.id, missionId: 2, count: 1 },
    { userId: demoUser.id, missionId: 5, count: 1 },
    { userId: demoUser.id, missionId: 1, count: 1 },
    { userId: demoUser.id, missionId: 4, count: 1 },
  ];
  await prisma.stamp.createMany({ data: stampEntries });

  const totalStamps = stampEntries.reduce((sum, entry) => sum + entry.count, 0);
  const totalPoints = missionLogs
    .filter((log) => log.status === "COMPLETED")
    .reduce((sum, log) => sum + log.reward, 0);

  await prisma.user.update({
    where: { id: demoUser.id },
    data: {
      stamps: totalStamps,
      points: totalPoints,
    },
  });

  await prisma.notification.createMany({
    data: [
      {
        userId: demoUser.id,
        title: "ماموریت شما تایید شد",
        body: "ماموریت خرید حجمی با موفقیت تایید شد.",
      },
      {
        userId: demoUser.id,
        title: "درخواست جدید",
        body: "لطفاً گزارش فروش ماهانه را تکمیل کنید.",
      },
    ],
  });

  console.log("Demo data seeded successfully.");
}

main()
  .catch((err) => {
    console.error("Seed error:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
