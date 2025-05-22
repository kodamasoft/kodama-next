import { parseISO, format } from 'date-fns';
import { useEffect, useState } from 'react';

export default function DateFormatter({ dateString }) {
	const [date, setDate] = useState(null);
	useEffect(() => {
		setDate(format(parseISO(dateString), 'LLLL	d, yyyy'));
	}, [dateString]);

	return <time dateTime={dateString}>{date}</time>;
}
