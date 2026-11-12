import expresss from 'express';
import cookieParser from "cookie-parser";
import router from '../routes/auth.routes.js';
const app = expresss();

app.use(expresss.json());
app.use(cookieParser())
app.use("/api/auth",router)
export default app;