let state = {

    profilePage: {
        posts: [
            {id: 1, post: "Привет, как дела?", likes: 30},
            {id: 1, post: "Мое первое тестовое сообщение", likes: 80}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Степан Чугунов"},
            {id: 2, name: "Аполлинарий Котлованов"},
            {id: 3, name: "Владимир Пинтусевич"},
            {id: 4, name: "Анатолий Спаснев"},
            {id: 5, name: "Дмитрий Лукин"}
        ],
        messages: [
            {id: 1, message: "Привет!"},
            {id: 2, message: "Как дела?"},
            {id: 3, message: "Хорошо. А у тебя?"}
        ]
    }

}

export default state;