import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

//semua button yang digunakan akan ditempatkan disini

export const CreateButton = () => {
    return(
        <Link href="/create/page" className="inline-flex items-center space-x-1 text-white bg-sky-500 hover:bg-sky-600 px-4 py-[8px] rounded-md">
            <IoAddSharp size={18}/>
            Create
        </Link>
    )
}

export const EditButton = () => {
    return(
        <Link href="/contacts/edit" className="rounded-sm border p-1 hover:bg-gray-100">
            <IoPencil size={18}/>
        </Link>
    )
}

export const DeleteButton = () => {
    return(
        <button className="rounded-sm border p-1 hover:bg-gray-100">
            <IoTrashOutline size={18}/>
        </button>
    )
}