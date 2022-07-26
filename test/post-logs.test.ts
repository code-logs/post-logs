import { html } from 'lit'
import { fixture, expect } from '@open-wc/testing'

import { PostLogs } from '../src/post-logs.js'

describe('PostLogs', () => {
  let element: PostLogs
  beforeEach(async () => {
    element = await fixture(html`<post-logs></post-logs>`)
  })

  it('renders a h1', () => {
    const h1 = element.renderRoot.querySelector('h1')!
    expect(h1).to.exist
    expect(h1.textContent).to.equal('My app')
  })

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible()
  })
})
