import {render, screen, fireEvent} from '@testing-library/vue'
import '@testing-library/jest-dom'
import index from '@/pages/index.vue'

describe('index.vue', () => {
  it('pushs route on submit', async () => {
    const $router = [];
    render(index , {
      mocks: {
        $router
      }
    });
    const button = screen.getByText("Search")
    await fireEvent.update(
      screen.getByLabelText('Username'),
      'derprofi'
    )
    fireEvent.click(button)
    const route =  [{"name": "user-resultPage", "params": {"resultPage": "derprofi"}}]
    expect($router).toEqual(route)
  });
})