
interface TaskItemProps {
    task: string
}

export default function TaskItem({task} : TaskItemProps) {
    return (
        <p className="text-green-500">{task}</p>
    )
}