import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

type TodoProp = {
    id: number
    userId: number
    title: string
    completed: boolean
}

type TodoPageProps = {
    todo: TodoProp
}

export default function Todo({ todo }: TodoPageProps) {
    return (
        <> 
            <Link href="/"> Voltar </Link>
            <h1>Exibindo o todo: {todo.id} </h1>
            <p>
                comentario: bla bla
                <Link href={`/todos/${todo.id}/comments/1`}>detalhes</Link>
            </p>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)

    const data: TodoProp[] = await response.json() 

    const paths = data.map((todo) => {
        return {
            params: {
                id: todo.id.toString(),
        },
    }
})

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`,
    )
    const todo = await data.json()

    return {
        props: { 
            todo
        },
    }
}