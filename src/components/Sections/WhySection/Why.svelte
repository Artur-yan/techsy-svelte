<script>
	import DoubleRow from '../../common/RectangularCards/DoubleRow.svelte';

    import defence from '$lib/assets/img/defence.svg';
	import timeBlue from '$lib/assets/img/timeBlue.svg';
	import ticket from '$lib/assets/img/ticket.svg';
	import teacher from '$lib/assets/img/teacher.svg';
	import diamond from '$lib/assets/img/diamond.svg';
	import cap from '$lib/assets/img/cap.svg';

    const svgs = [
		defence,
		timeBlue,
		ticket,
		teacher,
		diamond,
		cap
	];

    const location= "sections.whySection";


</script>

<DoubleRow  svgs={svgs} location={location}/>
