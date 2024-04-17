import { Cn } from "@shared/helpers/cn";
import SideMenu from "@shared/layouts/SideMenu/SideMenu";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { FunctionComponent, PropsWithChildren } from "react"

const styles = {
    root: Cn.c('flex h-screen bg-default'),
    main: Cn.c('flex flex-row w-full flex-1 bg-surface-default'),
    content: Cn.c('flex flex-col flex-1 w-full overflow-x-hidden overflow-y-auto'),
};

interface Props extends PropsWithChildren {
    extra?: React.ReactElement;
    menu?: React.ReactElement;
}

const SignedInLayout: FunctionComponent<Props> = async ({
    extra,
    menu,
    children
}) => {
    const messages = await getMessages()

    return (
        <>
            <div className={styles.root}>
            <NextIntlClientProvider
          messages={{ SideMenu: messages["SideMenu"] }}
        >
                <SideMenu />
               </NextIntlClientProvider> 
                <div className={styles.main}>
                    {menu}
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
            {extra}
        </>
    );
}

export default SignedInLayout