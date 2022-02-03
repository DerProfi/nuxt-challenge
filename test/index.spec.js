import {render, screen, fireEvent} from '@testing-library/vue'
import '@testing-library/jest-dom'
import index from '@/pages/index.vue'



describe('index.vue', () => {
  it('pushs route on submit',  () => {
    render(index)
    // auto fill the input for or
    // fire the event with payload
    const button = screen.getByText("Search")
    // expect router to have length(1)
    expect(button).toBeInTheDocument()
  });
})