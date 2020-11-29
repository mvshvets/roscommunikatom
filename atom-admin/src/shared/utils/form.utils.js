/**
 * Нормализация данных, для вывода в MultiSelectControl\SelectControl
 * @param el - очередная запись итерации
 */
export const normalizeDataForSelect = (
    el
) => ({
    value: el.id,
    label: el.name,
    key: String(el.id),
})

/**
 * Нормализуют данные справочника для использования в контроле
 * @param dictionary - справочник
 */
export const normalizeDictionaryToControl = (
    dictionary
) => {
    return Object.keys(dictionary).map((key) => ({
        key: key,
        value: key,
        label: dictionary[key],
    }))
}