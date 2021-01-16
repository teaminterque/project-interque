fetch('/token').then(res => res.json()).then(({apiKey, sessionId, token}) => {
    const session = OT.initSession(apiKey, sessionId)
    const publisher = OT.initPublisher('publishers')
    session.connect(token, () => {
      session.publish(publisher)
    })
    session.on('streamCreated', event => {
      session.subscribe(event.stream, 'subscribers')
    })
  })