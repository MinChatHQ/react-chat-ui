function calculateDifferences(date: Date) {
    try {
        const currentDate = new Date()
        const timeDifference = (new Date(currentDate.toUTCString())).getTime() - (new Date(date ? date.toUTCString() : "")).getTime();
        const minutesAgo = Math.floor(timeDifference / (1000 * 60));
        const hoursAgo = Math.floor(minutesAgo / 60);
        const daysAgo = Math.floor(hoursAgo / 24);

        return {
            minutesAgo,
            hoursAgo,
            daysAgo
        }
    } catch (e) {
        return {
            minutesAgo: 0,
            hoursAgo: 0,
            daysAgo: 0
        }
    }
}


export function calculateLastSeen(date: Date): string {
    const diff = calculateDifferences(date)

    if (diff.minutesAgo < 1) {
        return 'Active now'
    } else if (diff.minutesAgo === 1) {
        return 'Seen 1 minute ago'
    } else if (diff.minutesAgo < 60) {
        return `Seen ${diff.minutesAgo} minutes ago`
    } else if (diff.hoursAgo === 1) {
        return 'Seen 1 hour ago'
    } else if (diff.hoursAgo < 24) {
        return `Seen ${diff.hoursAgo} hours ago`
    } else if (diff.daysAgo === 1) {
        return 'Seen 1 day ago'
    } else {
        return `Seen ${diff.daysAgo} days ago`
    }
}

/**
 * 
 * @param date 
 * @returns 
 */
export function calculateTimeAgo(date: Date): string {

    const diff = calculateDifferences(date)

    if (diff.minutesAgo < 1) {
        return 'just now';
    }
    else if (diff.minutesAgo < 60) {
        return `${diff.minutesAgo}m`
    } else if (diff.hoursAgo < 24) {
        return `${diff.hoursAgo}h`
    } else {
        return `${diff.daysAgo}d`
    }
}
