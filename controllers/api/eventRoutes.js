const router = require('express').Router();
const { Events, Photo, User } = require('../../models');

// GET all Events
router.get('/', async (req, res) => {
    try {
      const eventData = await Events.findAll({
        include: [{ model: User },{ model: Photo }],
      });
      res.status(200).json(eventData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// CREATE new event
router.post('/', async (req, res) => {
    try {
      const eventData = await Events.create(req.body)
      res.status(200).json(eventData);
    } catch (err) {
      res.status(400).json(err);
    }
});

// UPDATE an event using its ID
router.put('/:id', async (req, res) => {
    try {
    const eventData = await Events.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
  
      if (!eventData) {
        res.status(404).json({ message: 'No category found with that ID!' })
        return
      }
      res.status(200).json(eventData)
    } catch (err) {
      res.status(500).json(err)
    }
  
});

// DELETE an event by its ID
router.delete('/:id', async (req, res) => {
    try {
      const eventData = await Events.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!eventData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(eventData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;