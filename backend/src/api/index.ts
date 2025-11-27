import { Router } from "express";
import requireAuth from "../middleware/requireAuth";
import authRouter from "./auth/index";
import userRouter from "./user";
import dashboardRouter from "./dashboard";
import missionsRouter from "./missions";
import purchasesRouter from "./purchases";
import displaysRouter from "./displays";
import referralsRouter from "./referrals";
import adminUsersRouter from "./admin/users";
import adminPurchasesRouter from "./admin/purchases";
import adminDisplaysRouter from "./admin/displays";
import adminReferralsRouter from "./admin/referrals";
import adminMissionsRouter from "./admin/missions";
import uploadRouter from "./upload";
import qrRouter from "./qr";

export const apiRouter = Router();
apiRouter.use("/auth", authRouter);
apiRouter.use("/upload", uploadRouter);
apiRouter.use("/qr", qrRouter);
apiRouter.use("/user", requireAuth, userRouter);
apiRouter.use("/dashboard", requireAuth, dashboardRouter);
apiRouter.use("/missions", requireAuth, missionsRouter);
apiRouter.use("/purchases", requireAuth, purchasesRouter);
apiRouter.use("/displays", requireAuth, displaysRouter);
apiRouter.use("/referrals", requireAuth, referralsRouter);

apiRouter.use("/purchase", requireAuth, purchasesRouter);
apiRouter.use("/display", requireAuth, displaysRouter);
apiRouter.use("/referral", requireAuth, referralsRouter);

apiRouter.use("/admin/users", requireAuth, adminUsersRouter);
apiRouter.use("/admin/purchases", requireAuth, adminPurchasesRouter);
apiRouter.use("/admin/displays", requireAuth, adminDisplaysRouter);
apiRouter.use("/admin/referrals", requireAuth, adminReferralsRouter);
apiRouter.use("/admin/missions", requireAuth, adminMissionsRouter);

export default apiRouter;
