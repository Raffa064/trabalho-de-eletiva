import Link from "next/link"
import { useRouter } from "next/router"

export default function TabLink({ href, children }) {
    const router = useRouter()
    const path = () => {
        var p = router.asPath
        var index = p.lastIndexOf("#")
        if (index <= 0) index = p.length 
        p = p.substring(0, index)
        return p
    }
    return <Link class={path() === href? "activedTopic" : null} href={href}>{children}</Link>
}