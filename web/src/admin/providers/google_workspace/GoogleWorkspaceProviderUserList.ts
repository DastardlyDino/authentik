import { DEFAULT_CONFIG } from "@goauthentik/common/api/config";
import { uiConfig } from "@goauthentik/common/ui/config";
import { PaginatedResponse, Table, TableColumn } from "@goauthentik/elements/table/Table";

import { msg } from "@lit/localize";
import { TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { GoogleWorkspaceProviderUser, ProvidersApi } from "@goauthentik/api";

@customElement("ak-provider-google-workspace-users-list")
export class GoogleWorkspaceProviderUserList extends Table<GoogleWorkspaceProviderUser> {
    @property({ type: Number })
    providerId?: number;

    searchEnabled(): boolean {
        return true;
    }

    async apiEndpoint(page: number): Promise<PaginatedResponse<GoogleWorkspaceProviderUser>> {
        return new ProvidersApi(DEFAULT_CONFIG).providersGoogleWorkspaceUsersList({
            page: page,
            pageSize: (await uiConfig()).pagination.perPage,
            ordering: this.order,
            search: this.search || "",
            providerId: this.providerId,
        });
    }

    columns(): TableColumn[] {
        return [new TableColumn(msg("Username")), new TableColumn(msg("ID"))];
    }

    row(item: GoogleWorkspaceProviderUser): TemplateResult[] {
        return [
            html`<a href="#/identity/users/${item.userObj.pk}">
                <div>${item.userObj.username}</div>
                <small>${item.userObj.name}</small>
            </a>`,
            html`${item.id}`,
        ];
    }
}
