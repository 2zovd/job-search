// TDD
import { render, screen } from '@testing-library/vue'
import TheSubnav from '@/components/TheSubnav.vue'

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            // collection of the thing we want to replace
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })

      const jobCount = screen.getByText('1653')

      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is NOT on jobs page', () => {
    it('does not display job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            // collection of the thing we want to replace
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })
    })

    const jobCount = screen.queryByText('1653')
    expect(jobCount).not.toBeInTheDocument()
  })
})
