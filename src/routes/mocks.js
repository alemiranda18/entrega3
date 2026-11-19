import { Router } from "express";
import { getMockUsers, seedMockUsers } from "../controllers/mocks.controllers.js";

const router = Router()

router.get("/users", getMockUsers)
router.post("/seed", seedMockUsers)


export default router