export const content = `<div class="content__header">
    {{{avatar}}}
    <div class="content__display-name">{{displayName}}</div>
    <div>{{{profile}}}</div>
    {{#if chatId}}
        <div>{{{addForm}}}</div>
    {{/if}}
</div>

{{#if chatId}}
    <div class="content__body">
        {{{chatMessages}}}
    </div>
    <div class="content__footer">
        {{{form}}}
    </div>
{{else}}
    <div class="content__plug">
        Выберите чат
    </div>
{{/if}}
`;
