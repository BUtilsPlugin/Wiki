import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: '💜 Many challenges combined',
        description: (
            <>
                BUtils is a plugin for your Minecraft: Java Edition Paper server which provides <b>50+</b>
                different modifications to change your Minecraft world and lets you immerse yourself in new dimensions.
            </>
        ),
    },
    {
        title: '🎉 Easy to use',
        description: (
            <>
                BUtils gives you a clean overview of all modifications which you can install.
                Just use <code>/mods</code> to open this view.
            </>
        ),
    },
    {
        title: '🆕 Constant updates',
        description: (
            <>
                We at BUtils want to give you the content you deserve. The environment of BUtils is
                updated constantly to provide new modifications and challenges.
            </>
        ),
    },
    {
        title: '🆓 Use it for free',
        description: (
            <>
                BUtils has its free version to give you a taste of their modifications, functions and challenges.
                Go try it out <b><a href="https://butils.net/discord">now</a></b>.
            </>
        ),
    },
    {
        title: '👨‍💻 Software as a Service',
        description: (
            <>
                We also have a Minecraft network <b><a>BUtils.net</a></b> which provides you with servers for an    hourly fee.
                Get your own server now starting at <b>€0.05 per hour</b>.
            </>
        ),
    },
    {
        title: '💁‍ Support for everybody',
        description: (
            <>
                On our <b><a href="https://butils.net/discord">Discord server</a></b>, you can get support for every topic
                regarding BUtils. We will always try to help you.
            </>
        ),
    },
    {
        title: '👨‍👩‍👧‍👦 Free Ultimate for Twitch subscribers',
        description: (
            <>
                Every twitch subscriber of <b><a href="https://www.twitch.tv/subs/DerBanko">DerBanko</a></b> will get a BUtils
                Ultimate license for 32 days. To obtain or renew the license, read the <b><a>#twitch</a></b> channel on
                our <b><a href="https://butils.net/discord">Discord server</a></b>.
            </>
        ),
    },
    {
        title: '🥳 Giveaways and claim events',
        description: (
            <>
                Check out our <b><a>#claim</a></b> channel on our <b><a href="https://butils.net/discord">Discord server</a></b>.
                Additionally, subscribe the Giveaways role in <b><a>#information</a></b>.
            </>
        ),
    }
];

function Feature({title, description}) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center padding-horiz--md">
                <br/>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h1 className="text--center">What is BUtils?</h1>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}