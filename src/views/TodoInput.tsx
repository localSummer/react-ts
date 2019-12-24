import React from 'react'

const todoInputDefaultProps = {
  inputSetting: {
    maxlength: 20,
    placeholder: '请输入todo'
  }
}

type IProps = {
  handleSubmit?: (value: string) => void
  children?: React.ReactNode
} & Partial<typeof todoInputDefaultProps>

const createPropsGetter = <DP extends object>(defaultProps: DP) => {
  return <P extends Partial<DP>>(props: P) => {
    type PropsExcludingDefaults = Omit<P, keyof DP>
    type RecomposedProps = DP & PropsExcludingDefaults
    return (props as any) as RecomposedProps
  }
}

const getProps = createPropsGetter<typeof todoInputDefaultProps>(
  todoInputDefaultProps
)

class TodoInput extends React.Component<IProps, {}> {
  public static defaultProps = todoInputDefaultProps

  public componentDidMount() {
    console.log(this.props)
  }

  public render() {
    let { inputSetting } = getProps<IProps>(this.props)
    return <div>{inputSetting.placeholder}</div>
  }
}

export default TodoInput
