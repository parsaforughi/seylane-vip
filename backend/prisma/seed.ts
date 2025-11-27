import { PrismaClient, MissionType, SubmissionStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // ۱) ایجاد کاربر دموی VIP
  const demoUser = await prisma.user.upsert({
    where: { telegramId: 9999 },
    update: {},
    create: {
      telegramId: 9999,
      firstName: "VIP",
      lastName: "Demo",
      points: 26,
      stamps: 5,
      phone: "09120000000",
      city: "Tehran",
      storeName: "Demo Store",
      managerName: "Demo Manager",
    },
  });

  // ۲) مأموریت‌ها
  const missions = [
    {
      title: "ارسال عکس چیدمان ویترین",
      description: "ارسال 3 عکس از چیدمان فعلی",
      rewardPoints: 5,
      rewardStamps: 1,
      type: MissionType.DISPLAY,
      isActive: true
    },
    {
      title: "شرکت در جلسه آموزشی",
      description: "حضور کامل در جلسه حضوری یا آنلاین",
      rewardPoints: 5,
      rewardStamps: 1,
      type: MissionType.TRAINING,
      isActive: true
    },
    {
      title: "معرفی مشتری جدید",
      description: "ارجاع مشتری VIP جدید برای برند",
      rewardPoints: 10,
      rewardStamps: 1,
      type: MissionType.REFERRAL,
      isActive: true
    }
  ];

  const createdMissions = [];
  for (const mission of missions) {
    const created = await prisma.mission.create({
      data: mission,
    });
    createdMissions.push(created);
  }

  // ۳) Referral دموی اولیه
  await prisma.referral.create({
    data: {
      userId: demoUser.id,
      missionId:
        createdMissions.find((m) => m.type === MissionType.REFERRAL)?.id ?? 1,
      managerName: "Demo Manager",
      storeName: "Demo Store",
      phone: "09120000000",
      city: "Tehran",
      status: SubmissionStatus.PENDING
    }
  });

  // ۴) Notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: demoUser.id,
        type: "mission_approved",
        message: "ماموریت شما تایید شد"
      },
      {
        userId: demoUser.id,
        type: "new_request",
        message: "درخواست جدید ثبت شد"
      }
    ]
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
