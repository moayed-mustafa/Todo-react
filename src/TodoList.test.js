import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import TodoList from './TodoList.js'

// smoke test
it('should render without crashing', () => {
    render(<TodoList/>)
})

// snapshot test
it('should match an existing snapshot', () => {
    const { asFragment } = render(<TodoList />)

    expect(asFragment).toMatchSnapshot()
})

it('should be able to add a todo', () => {
    const { getByPlaceholderText, getByText, getByTestId} = render(<TodoList />)
    // get the button and the input
    const input = getByPlaceholderText('todo')
    const button = getByText('Add')
    // todo: this is unable to be found which is what I want, however I still end up with this: Unable to find an element by: [data-testid="run"]
    // expect(getByTestId('run')).not.toBeInTheDocument()

    // add a task
    fireEvent.change(input, { target: { value: "run" } })
    fireEvent.click(button)
    expect(getByTestId('run')).toBeInTheDocument()
})

it('should be able tofind a todo', () => {
    // todo:

    const { getByTestId } = render(<TodoList />)
    expect(getByTestId('clean the house')).toBeInTheDocument()


})
it('should be able to delete a todo', () => {
    // todo: there appears to be a timing problem

    const { queryAllByText,getByTestId } = render(<TodoList />)
    expect(getByTestId('clean the house')).toBeInTheDocument()

    const button = queryAllByText('X')
    fireEvent.click(button[0])
    expect(getByTestId('clean the house')).not.toBeInTheDocument()
})