import { Router } from "express";
import requireAuth from "../middleware/requireAuth.js";
import authRouter from "./auth/index.js";
import userRouter from "./user.js";
import dashboardRouter from "./dashboard.js";
import missionsRouter from "./missions.js";
import purchasesRouter from "./purchases.js";
import displaysRouter from "./displays.js";
import referralsRouter from "./referrals.js";
import adminUsersRouter from "./admin/users.js";
import adminPurchasesRouter from "./admin/purchases.js";
import adminDisplaysRouter from "./admin/displays.js";
import adminReferralsRouter from "./admin/referrals.js";
import adminMissionsRouter from "./admin/missions.js";

export const apiRouter = Router();
apiRouter.use("/auth", authRouter);
apiRouter.use("/user", requireAuth, userRouter);
apiRouter.use("/dashboard", requireAuth, dashboardRouter);
apiRouter.use("/missions", requireAuth, missionsRouter);
apiRouter.use("/purchases", requireAuth, purchasesRouter);
apiRouter.use("/displays", requireAuth, displaysRouter);
apiRouter.use("/referrals", requireAuth, referralsRouter);

apiRouter.use("/admin/users", requireAuth, adminUsersRouter);
apiRouter.use("/admin/purchases", requireAuth, adminPurchasesRouter);
apiRouter.use("/admin/displays", requireAuth, adminDisplaysRouter);
apiRouter.use("/admin/referrals", requireAuth, adminReferralsRouter);
apiRouter.use("/admin/missions", requireAuth, adminMissionsRouter);

export default apiRouter;
