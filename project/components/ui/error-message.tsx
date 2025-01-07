interface ErrorMessageProps {
    title: string
    description: string
  }
  
  export function ErrorMessage({ title, description }: ErrorMessageProps) {
    return (
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }