module.exports = async function (context, req) {
  context.res = {
    body: { text: "Hello i'm the API" },
  };
};
