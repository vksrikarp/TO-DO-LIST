import { useState } from 'react'
import CrudHoc from '../Common/HOCs/CrudHoc'
import ToDoCard from './ToDoCard'
import ToDoDetail from './ToDoDetail'

const ToDos = () => {
    const [todoList,setToDoList] = useState([
        {
          "id": 1,
          "name": "Project Alpha",
          "description": "A detailed description of Project Alpha.",
          "deadLineDate": "2025-01-15",
          "startDate": "2025-01-01",
          "photo": "",
          "file": [
            // {
            //   "fileName": "specifications.pdf",
            //   "fileUrl": "https://example.com/specifications-alpha.pdf"
            // },
            // {
            //   "fileName": "designs.zip",
            //   "fileUrl": "https://example.com/designs-alpha.zip"
            // }
          ]
        },
        {
          "id": 2,
          "name": "Project Beta",
          "description": "A detailed description of Project Beta.",
          "deadLineDate": "2025-02-20",
          "startDate": "2025-01-15",
          "photo": "",
          "file": [
            // {
            //   "fileName": "requirements.docx",
            //   "fileUrl": "https://example.com/requirements-beta.docx"
            // },
            // {
            //   "fileName": "roadmap.xlsx",
            //   "fileUrl": "https://example.com/roadmap-beta.xlsx"
            // }
          ]
        },
        {
          "id": 3,
          "name": "Project Gamma",
          "description": "A detailed description of Project Gamma.",
          "deadLineDate": "2025-03-10",
          "startDate": "2025-02-01",
          "photo": "",
          "file": [
            // {
            //   "fileName": "proposal.pdf",
            //   "fileUrl": "https://example.com/proposal-gamma.pdf"
            // }
          ]
        }
      ]
      )
  return (
    CrudHoc(
        ToDoCard,
        ToDoDetail,
        1,
        todoList,
    )
  )
}

export default ToDos