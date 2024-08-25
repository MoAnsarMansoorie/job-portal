// import { Job } from "../models/job.model.js"

// // student ke liye
// export const jobRegisterController = async (req, res) => {
//     try {
//         const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body
//         const userId = req.id

//         // if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
//         //     return res.status(400).json({
//         //         success: false,
//         //         message: "All fields are required"
//         //     })
//         // }

//         if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
//             return res.status(400).json({
//                 message: "Somethin is missing.",
//                 success: false
//             })
//         };

//         const job = await Job.create({
//             title,
//             description,
//             requirements: requirements.split(","),
//             salary: Number(salary),
//             location,
//             jobType,
//             experienceLevel: experience,
//             position,
//             company: companyId,
//             created_by: userId

//         })

//         return res.status(201).json({
//             success: true,
//             message: "New job created successsfully",
//             job
//         })
        
//     } catch (error) {
//         console.log("jobregistercontroller", error)
//     }
// }

// // export const jobRegisterController = async (req, res) => {
// //     try {
// //         const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
// //         const userId = req.id;

// //         if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
// //             return res.status(400).json({
// //                 message: "Somethin is missing.",
// //                 success: false
// //             })
// //         };
// //         const job = await Job.create({
// //             title,
// //             description,
// //             requirements: requirements.split(","),
// //             salary: Number(salary),
// //             location,
// //             jobType,
// //             experienceLevel: experience,
// //             position,
// //             company: companyId,
// //             created_by: userId
// //         });
// //         return res.status(201).json({
// //             message: "New job created successfully.",
// //             job,
// //             success: true
// //         });
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // student ke liye

// export const getAllJobsController = async (req, res) => {
//     try {
//         const keyword = req.query.keyword || ""
//         const query = {
//             $or: [
//                 {title: { $regex: keyword, $options: "i"}},
//                 {description: { $regex: keyword, $options: "i"}}
//             ]
//         };

//         const jobs = await Job.find(query)
//         if(!jobs) {
//             return res.status(400).json({
//                 success: false,
//                 message: "This kind of jobs not exists"
//             })
//         }

//         return res.status(200).json({
//             success: true,
//             message: "Jobs found",
//             jobs
//         })
        
//     } catch (error) {
//         console.log("getAllJobs", error)
//     }
// }

// // student ke liye
// export const getJobByIdController = async (req, res) => {
//     try {
//         const jobId = req.params.id

//         const job = await Job.findById(jobId)
//         if(!job) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Job By Id not found"
//             })
//         }

//         return res.status(200).json({
//             success: true,
//             message: "Job found by Id successfully",
//             job
//         })
        
//     } catch (error) {
//         console.log("GetJobByIdController", getJobByIdController)
//     }
// }

// // admin kitne job create kiya hai abhi tk
// export const getAdminJobsController = async (req, res) => {
//     try {
//         const adminId = req.id

//         const jobs = await Job.find({createdBy: adminId})

//         if(!jobs) {
//             return res.status(400).json({
//                 success: false,
//                 message: "This admin has no opening"
//             })
//         }

//         return res.status(200).json({
//             success: true,
//             message: "Jobs found successfully",
//             jobs
//         })
        
//     } catch (error) {
//         console.log("getAdminJobsController", error)
//     }
// }
