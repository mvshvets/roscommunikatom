import moment from 'moment'

export const formatDate = (date) => date && moment.unix(date).format("DD.MM.YYYY")