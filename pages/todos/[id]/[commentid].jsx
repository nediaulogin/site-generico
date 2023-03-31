import Link from "next/link";
import { useRouter,  } from "next/navigation";


export default function Comment() {


    const router = useRouter()

    const todoId = router.query.todoId

    const commentId = router.query.comment

    return (
        <>
        <Link href={`/todos/${todoId}`}>Voltar</Link>
        <h1>Exibindo o comentario número: {comment}</h1>
        </>
    )
}