import { Link } from "@/navigation";
import Icon, { IconName } from "@shared/components/Icon";
import { Cn } from "@shared/helpers/cn";
import { FunctionComponent } from "react";

const styles = {
    baseLink: Cn.c("h-10 flex items-center py-3 pl-3 space-x-3 w-full rounded"),
    baseIcon: Cn.c("w-4 h-4"),
    baseLabel: Cn.c("font-paragraph-small-regular"),
    default: {
        link: Cn.c("hover:bg-surface-emphasized"),
        icon: Cn.c(""),
        label: Cn.c("text-emphasized"),
    },
    disabled: {
        link: Cn.c("pointer-events-none"),
        icon: Cn.c("text-icons-disabled"),
        label: Cn.c("text-disabled"),
    },
    active: {
        link: Cn.c("bg-surface-primary-default"),
        icon: Cn.c("text-icons-primary-default"),
        label: Cn.c("font-paragraph-small-semi-bold text-primary-default")
    }
};

interface Props {
    label: string;
    to: string;
    isActive?: boolean;
    disabled?: boolean;
    icon?: IconName;
}

const SideMenuItem: FunctionComponent<Props> = ({ to, label, icon, isActive = false, disabled = false }) => {
    const stateStyles = disabled
        ? styles.disabled
        : isActive
            ? styles.active
            : styles.default

    return (
        <Link href={to} className={Cn.join([styles.baseLink, stateStyles.link])}>
            {icon && <Icon name={icon} className={Cn.join([styles.baseIcon, stateStyles.icon])} />}
            <p className={Cn.join([styles.baseLabel, stateStyles.label])}>{label}</p>
        </Link>
    );
}

export {
    SideMenuItem
}