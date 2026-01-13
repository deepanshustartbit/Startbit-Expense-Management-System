module.exports = srv => {

    const { Expenses } = srv.entities;

    srv.on("FetchExpenseData", async () => {
        const tx = cds.transaction(srv);
        return await tx.run(SELECT.from(Expenses));
    });

};
