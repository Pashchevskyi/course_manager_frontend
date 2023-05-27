import { ICourse } from "../models/course";

export const courses: ICourse[] = [
    {
        "id": 1,
        "name": "Java Pro",
        "description": "Professional level of Java course (Design patterns. Spring Framework, Testing etc.)",
        "tutor": "Vasyl Ivanov",
        "duration": 98,
        "duration_unit": "hours"
    },
    {
        "id": 2,
        "name": "Java Enterprise",
        "description": "Advenced level of Java course (Servlets, Spring Framework etc.)",
        "tutor": "Petro Kovalenko",
        "duration": 42,
        "duration_unit": "hours"
    },
    {
        "id": 3,
        "name": "English",
        "description": "Englesh course for IT specialists",
        "tutor": "Anna Reznichenko",
        "duration": 98,
        "duration_unit": "hours"
    },
    {
        "id": 4,
        "name": "PHP",
        "description": "PHP development for web",
        "tutor": "Pavlo Pavlenko",
        "duration": 98,
        "duration_unit": "hours"
    },
    {
        "id": 5,
        "name": "QA",
        "description": "Quality analizer course (Postman, Selenium, PHPUnit, Codeception etc.)",
        "tutor": "Svetlana Kovalchuk",
        "duration": 42,
        "duration_unit": "hours"
    }
]
