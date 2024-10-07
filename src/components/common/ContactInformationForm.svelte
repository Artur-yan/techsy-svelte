<script>
	import { _ } from 'svelte-i18n';
	import Input from './Input.svelte';
	import { name, email, phone, projectDescription } from '../../store/stores';
</script>

<div class="flex flex-col gap-4 sm:gap-4">
	<Input
		label={$_('name')}
		placeholder={$_('name_placeholder')}
		required
		type="text"
		value={$name}
		onChange={(value) => name.set(value)}
	/>
	<Input
		label={$_('email')}
		placeholder={$_('email_placeholder')}
		required
		type="email"
		value={$email}
		onChange={(value) => email.set(value)}
	/>
	<Input
		label={$_('phone')}
		placeholder={$_('phone_placeholder')}
		type="text"
		value={$phone}
		onChange={(value) => phone.set(value)}
	/>
	<Input
		label={$_('project_description')}
		placeholder={$_('description_placeholder')}
		type="textarea"
		value={$projectDescription}
		onChange={(value) => projectDescription.set(value)}
	/>
</div>
