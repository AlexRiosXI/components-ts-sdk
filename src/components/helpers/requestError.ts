import {addToast} from "@heroui/react"



export const onRequestError = (error:any, customTitle = "Something went wrong") => {
  addToast({
    title: customTitle,
    description: error.toString(),
    color: "danger",
    
  })
}