import './PageContent.scss'
import React from 'react'
import classNames from 'classnames'

export const PageContent = React.memo(
    ({ children, className }) => (
        <section className={classNames(['page-content', className])}>
            {children}
        </section>
    )
)
