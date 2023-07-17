const commentsList = [
  {
    commentText: "I love this event it so fun",
    commenter: "Nifemi Oladapo",
    eventId: 1,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Daniel Oladapo",
    eventId: 1,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Daniel Oladapo",
    eventId: 1,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Daniel Oladapo",
    eventId: 1,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Daniel Oladapo",
    eventId: 1,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Daniel Oladapo",
    eventId: 1,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Daniel Oladapo",
    eventId: 1,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Kolawole Oladapo",
    eventId: 2,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Modupe Oladapo",
    eventId: 3,
  },
  {
    commentText: "I love this event it so fun",
    commenter: "Damilola Oladapo",
    eventId: 4,
  },
];

function comments(req, res) {
  if (req.method === "GET") {
    const comments = commentsList.filter(
      (comment) => comment.eventId === Number(req.query.eventId)
    );
    res.status(200).json(comments);
  }

  if (req.method === "POST") {
    commentsList.push({
      commenter: req.body.commenter,
      commentText: req.body.commentText,
      eventId: Number(req.body.eventId),
    });
    const comments = commentsList.filter(
      (comment) => comment.eventId === Number(req.body.eventId)
    );
    res.status(200).json(comments);
  }
}

export default comments;
