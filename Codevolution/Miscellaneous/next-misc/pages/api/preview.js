export default function handler(req, res) {
    res.setPreviewData({name: "nabajyoti"})
    res.redirect(req.query.redirect);
}
