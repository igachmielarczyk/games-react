export const fadeIn ={
    hidden: {
        opacity: 0, 
    },
    show: {
        opacity: 1,
        transition: {
            duration: .75,
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .75,
            },
        }
    },
};

export const popup = {
    hidden: {
        opacity: 0, 
        scale: .3,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .75,
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .75,
            },
        }
    },
}