import { Router } from "express";
import { createCourse, updateCourse, deleteCourse, getAllCourses  , getCourseWithLectures } from "../controller/course.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import { upload } from "../config/multer.config.js";



const router = Router()


// Create new course route
router.post("/create", authMiddleware, isAdmin, upload.single("thumbnail"), createCourse)

// Update course route
router.put("/update/:courseId", authMiddleware, isAdmin, upload.single("thumbnail"), updateCourse)


// Delete course route
router.delete("/delete/:courseId", authMiddleware, isAdmin, deleteCourse)

// Get all courses route
router.get("/", authMiddleware, getAllCourses)

// Get Single course with all Lectures
router.get("/:courseId", authMiddleware, getCourseWithLectures)


export default router;

 