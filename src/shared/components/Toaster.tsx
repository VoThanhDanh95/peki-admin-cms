import { Toaster as RawToaster } from "react-hot-toast"
import tailwindConfig from "../../../tailwind.config"
import { FunctionComponent } from "react"

const Toaster: FunctionComponent = () => {
  const { theme } = tailwindConfig

  return (
    <RawToaster
      position="top-right"
      toastOptions={{
        className: "font-paragraph-small-bold",
        success: {
          style: {
            color: theme.textColor["success-emphasized"],
            background: theme.backgroundColor?.surface["success-subdued"],
          },
          iconTheme: {
            primary: theme.textColor["success-emphasized"],
            secondary: theme.textColor["white"],
          },
        },
        error: {
          style: {
            color: theme.textColor["critical-emphasized"],
            background: theme.backgroundColor.surface["critical-subdued"],
          },
          iconTheme: {
            primary: theme.textColor["critical-emphasized"],
            secondary: theme.textColor["white"],
          },
        },
      }}
    />
  )
}

export { Toaster }
