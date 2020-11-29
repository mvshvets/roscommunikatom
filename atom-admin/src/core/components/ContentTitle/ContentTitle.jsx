import './ContentTitle.scss'
import React from 'react'
import classNames from 'classnames'

export const ContentTitle = React.memo(
    ({ children, className, title, actionsToolbar }) => (
        <div className={classNames(['content-title', className])}>
            <div className="content-title__header">
                <h1>{title}</h1>

                {actionsToolbar}
            </div>

            {children}
        </div>
    )
)
