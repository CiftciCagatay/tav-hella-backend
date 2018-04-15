module.exports = ({ app, repo }) => {
  app.get('/', (req, res, next) => {
    repo
      .getTenants()
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.get('/:id', (req, res, next) => {
    repo
      .getTenantById(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.post('/', (req, res, next) => {
    repo
      .createTenant(req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.put('/:id', (req, res, next) => {
    repo
      .updateTenant(req.params.id, req.body)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })

  app.delete('/:id', (req, res, next) => {
    repo
      .deleteTenant(req.params.id)
      .then(result => res.status(200).json(result))
      .catch(error => res.status(500).send())
  })
}
