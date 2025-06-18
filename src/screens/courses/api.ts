import {axiosInstance} from "~/shared/api";

import type {Course} from "~/entities/course";

export const loadCoursesList = async (): Promise<Course[]> => {
    const response = await axiosInstance.get('/docs/courses.json');
    return response.data;
}
