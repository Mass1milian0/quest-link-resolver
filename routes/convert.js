const ytdl = require("ytdl-core")

module.exports = {
    url: "/convert"
    , method: "GET"
    , handler: (req, reply) => {
        const urlData = req.urlData()
        let url = urlData.query
        if (!url) {
            return reply.send({
                error: "no url provided"
            })
        }
        reply.header('Content-Disposition', 'attachment; filename="video.mp4"');
        let rs = ytdl(url, {
            format: 'mp4',
            filter: 'audioandvideo'
        });
        reply.send(rs)
    }
}
