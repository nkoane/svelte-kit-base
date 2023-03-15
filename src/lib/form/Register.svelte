<script lang="ts">
    import type { ActionData } from './$types';

    export let form: ActionData;
</script>

<form action="?/identify" method="post">
    <p>
        <label for="first_name">
            <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Your name?"
                value={form?.first_name ?? ''} />
        </label>
        <label for="last_name">
            <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Your surname?"
                value={form?.last_name ?? ''} />
        </label>
        <label id="avatar">
            <span>[ preview ]</span>
            <input type="file" name="avatar" id="avatar" />
        </label>
    </p>
    <p>
        <label for="email_address">How do you like spam? </label>
        <input
            type="email"
            name="email_address"
            id="email_address"
            placeholder="Your email address?"
            value={form?.email_address ?? ''} />
    </p>
    <p>
        <label for="age">How old are you? </label>
        <input type="number" name="age" id="age" placeholder="Your age?" value={form?.age ?? ''} />
    </p>
    <p>
        <label for="phone_number">And sms spam? </label>
        <input
            type="tel"
            name="phone_number"
            id="phone_number"
            placeholder="Your phone number?"
            value={form?.phone_number ?? ''} />
    </p>
    <p>
        <label for="password">Your secret</label>
        <input type="password" name="password" id="password" placeholder="Your password?" />
    </p>
    <p>
        <label for="confirm_password">Are you sure?</label>
        <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm, password?" />
    </p>
    <p>
        <label for="adulting">
            Is you grown?
            <input type="checkbox" name="adulting" id="adulting" value="1" />
        </label>
        <button type="submit">POST</button>
    </p>
</form>
