const defaultState = {
    repeat: false,
    ch0: 0,
    ch1: 1,
    ch2: 2,
    ch3: 3
}

export default function songRepeat (state = defaultState, action) {
    const { repeat: repeatArg, type } = action

    switch (type) {
        case 'TOGGLE_SONG_REPEAT': {
            const { ch0, ch1, ch2, ch3, repeat } = repeatArg

            return {
                ch0,
                ch1,
                ch2,
                ch3,
                repeat
            }
        }

        default: return state
    }
}
