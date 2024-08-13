const UseModel = require('../models/UserModel');

UseModel.find()
.then(dados => console.log(dados));

exports.pageHome = (req, res) => {
    res.render('dashboard', {
        dashboardUserAvatar: 'https://cdn.discordapp.com/attachments/1153846539068907582/1270226406147620884/Aladdin_icon_.jpeg?ex=66b2ee06&is=66b19c86&hm=a2bf4f7616819543b70a96a7df9f87b5d66986360679cda30376fc0392d8f550&',
        dashboardUserName: 'Luan Ceo',
        dashboardUserEmail: 'luanventuradev@gmail.com',
        dashboardUserPlan: '<span style="color: rgba(0, 229, 255, 0.784);">Diamond</span>',
        dashboardUserDuration: '<span style="color: rgb(6, 211, 105);">LifeTime</span>',
    })
};