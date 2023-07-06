const knex = require("../database/knex")

class NotesController{
  async create(req, res) {
    const { title, description, tags, links } = req.body;
    const { user_id } = req.params;

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id
    });

    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link
      }
    })

    await knex("links").insert(linksInsert);

    const tagsInsert = tags.map(name => {
      note_id,
      user_id,
      name
    })

    await knex("tags").insert(tagsInsert);

    res.json();
  }
}

module.exports = NotesController;