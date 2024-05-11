import { Layout, LayoutProps } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { JSX } from "react/jsx-runtime";

export const MyLayout = (props: LayoutProps) => (
    <>
        <Layout {...props} />
        <ReactQueryDevtools initialIsOpen={false} />
    </>
)