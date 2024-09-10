// api/contact/index.js
module.exports = async function (context, req) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Process the form data (send email, save to DB, etc.)
    context.res = {
        status: 200,
        body: `Thanks for contacting us, ${name}!`
    };
};
